import dynamic from "next/dynamic.js";
const FC = dynamic(() => import("./next-fusioncharts.js"), { ssr: false });
export default function Index() {
  return (
    <div>
      <h2>Column Chart Using Next JS</h2>
      <FC></FC>
    </div>
  );
}
