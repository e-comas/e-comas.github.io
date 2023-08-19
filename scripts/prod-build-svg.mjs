const config = {
  plugins: [
    {
      name: "cleanupIds",
      params: {
        preservePrefixes: ["t"],
      },
    },
  ],
};

let _svgo;
export async function svgo(svg) {
  _svgo ??= await import("svgo");
  const { data } = await _svgo.optimize(svg, config);
  return data;
}
