const config = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeHiddenElems: false,
          removeUselessDefs: false,
          cleanupIDs: false,
        },
      },
    },
    { name: "convertStyleToAttrs", active: false },
  ],
};

let _svgo;
export async function svgo(svg) {
  _svgo ??= await import("svgo");
  const { data } = await _svgo.optimize(svg, config);
  return data;
}
