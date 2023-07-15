// Inspired from https://github.com/AnandChowdhary/docs-markdown
import type { docs_v1 } from "googleapis";

const listItemLine = /^\s*(-|1\.)\s/;

export function googleDocsToMarkdown(file: docs_v1.Schema$Document) {
  let text = "";
  file.body?.content?.forEach((item) => {
    /**
     * Tables
     */
    if (item.table?.tableRows) {
      // Make a blank header
      const cells = item.table.tableRows[0]?.tableCells;
      // Make a blank header
      text += `|${cells?.map(() => "").join("|")}|\n|${cells
        ?.map(() => "-")
        .join("|")}|\n`;
      item.table.tableRows.forEach(({ tableCells }) => {
        const textRows: any[] = [];
        tableCells?.forEach(({ content }) => {
          content?.forEach(({ paragraph }) => {
            const styleType =
              paragraph?.paragraphStyle?.namedStyleType || undefined;

            textRows.push(
              paragraph?.elements?.map((element) =>
                styleElement(element, styleType)?.replace(/\s+/g, "").trim()
              )
            );
          });
        });
        text += `| ${textRows.join(" | ")} |\n`;
      });
    }

    /**
     * Paragraphs and lists
     */
    if (item.paragraph?.elements) {
      const styleType =
        item.paragraph.paragraphStyle?.namedStyleType || undefined;
      const bullet = item.paragraph.bullet;
      if (bullet?.listId) {
        const listDetails = file.lists?.[bullet.listId];
        const glyphFormat =
          listDetails?.listProperties?.nestingLevels?.[0].glyphFormat || "";
        const padding = "  ".repeat(bullet.nestingLevel || 0);
        if (["[%0]", "%0."].includes(glyphFormat)) {
          text += `${padding}1. `;
        } else {
          text += `${padding}- `;
        }
      }
      item.paragraph.elements.forEach((element) => {
        const content = element.textRun && extractContent(element);
        if (content && content !== "\n") {
          text += styleElement(element, styleType);
        }
        if (
          element.inlineObjectElement?.inlineObjectId &&
          file.inlineObjects?.[element.inlineObjectElement.inlineObjectId]
            ?.inlineObjectProperties?.embeddedObject?.imageProperties
        ) {
          const { contentUri } = (file as any).inlineObjects[
            element.inlineObjectElement.inlineObjectId
          ].inlineObjectProperties.embeddedObject.imageProperties as {
            contentUri: string;
          };
          text += `![](./${contentUri})`;
        }
      });
      text += bullet?.listId ? "\n" : "\n\n";
    }
  });

  text = text
    .split("\n")
    .filter((line, index, lines) =>
      listItemLine.test(lines[index - 1]) && line.trim() === ""
        ? index + 1 < lines.length && !listItemLine.test(lines[index + 1])
        : true
    )
    .join("\n");
  return text + "\n";
}

const extractContent = (
  element: docs_v1.Schema$ParagraphElement,
  prefix: string = "",
  suffix: string = prefix
): string | undefined => {
  const textRun = element?.textRun;
  let text = textRun?.content;
  if (prefix && text) {
    if (text.startsWith(" ")) prefix = " " + prefix;
    if (text.endsWith(" ")) suffix += " ";
    text = text.trim();
  }
  if (textRun?.textStyle?.link?.url)
    return `${prefix}[${text}]${textRun.textStyle.link.url}${suffix}`;
  return prefix + text + suffix;
};

const styleElement = (
  element: docs_v1.Schema$ParagraphElement,
  styleType?: string
): string | undefined => {
  if (styleType === "TITLE") {
    return `# ${extractContent(element)}`;
  } else if (styleType === "SUBTITLE") {
    return extractContent(element, "_");
  } else if (styleType === "HEADING_1") {
    return `## ${extractContent(element)}`;
  } else if (styleType === "HEADING_2") {
    return `### ${extractContent(element)}`;
  } else if (styleType === "HEADING_3") {
    return `#### ${extractContent(element)}`;
  } else if (styleType === "HEADING_4") {
    return `##### ${extractContent(element)}`;
  } else if (styleType === "HEADING_5") {
    return `###### ${extractContent(element)}`;
  } else if (styleType === "HEADING_6") {
    return `####### ${extractContent(element)}`;
  } else if (
    element.textRun?.textStyle?.bold &&
    element.textRun?.textStyle?.italic
  ) {
    return extractContent(element, "**_", "_**");
  } else if (element.textRun?.textStyle?.italic) {
    return extractContent(element, "_");
  } else if (element.textRun?.textStyle?.bold) {
    return extractContent(element, "**");
  }

  return extractContent(element);
};
