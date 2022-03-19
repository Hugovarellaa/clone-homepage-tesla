import { useEffect, useRef } from "react";
import useModel from "../hooks/useModel";
import { Container } from "./styles";

interface props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection: React.FC<props> = ({
  modelName,
  overlayNode,
  children,
  ...rest
}) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [modelName, overlayNode, registerModel]);
  return (
    <>
      <Container ref={sectionRef} {...rest}>
        {children}
      </Container>
    </>
  );
};

export default ModelSection;
