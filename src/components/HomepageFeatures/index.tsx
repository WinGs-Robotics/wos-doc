import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Various Cobots Support",
    Svg: require("@site/static/img/robot.svg").default,
    description: (
      <>
        WOS is compatible with a wide range of Cobot brands including Franka
        Emika, Universal Robotics, STR400 and more. These devices can be
        controlled concurrently on the same computer.
      </>
    ),
  },
  {
    title: "Low-Code Programming",
    Svg: require("@site/static/img/flowchart.svg").default,
    description: (
      <>
        Features like motion planning and real-time control are accessible via a
        graphical interface. This facilitates the synchronized operation of
        different branded robots for complex tasks.
      </>
    ),
  },
  {
    title: "Multi-Platform, OS",
    Svg: require("@site/static/img/raspberryPi.svg").default,
    description: (
      <>
        WOS runs smoothly on Linux, Windows, Mac, and Android, supporting both
        x86 and ARM architectures. One simple excutable, efficiently performance
        with minimal CPU usage, even on a $30 Raspberry Pi 3.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
