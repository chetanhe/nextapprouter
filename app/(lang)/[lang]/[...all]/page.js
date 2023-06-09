// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [
    {
      all: ["erectile-dysfunction"],
    },
    { all: ["contraception", "combined-pill"] },
    { all: ["weight-loss"] },
    { all: ["erectile-dysfunction", "sildenafil"] },
    { all: ["contraception", "combined-pill", "yasmin"] },
    { all: ["weight-loss", "saxenda"] },
  ];
}

export async function generateMetadata({ params }, parent) {
  return {
    title: params.all.join("/"),
  };
}

export default async function Page({ params }) {
  console.log(params);
  return params.all.map((segment, index) => {
    return <h1 key={index}>{segment}</h1>;
  });
}
