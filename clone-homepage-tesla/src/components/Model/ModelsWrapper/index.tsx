import { useCallback, useRef, useState } from "react";
import ModelsContext, { CarModel } from "../context/ModelsContext";
import { Container, OverlaysRoot } from "./styles";
import ModelOverlay from "../ModelOverlay";

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  //cadastra o carro
  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((oldSate) => [...oldSate, model]);
  }, []);

  //retira o carro
  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((oldSate) =>
      oldSate.filter((model) => model.modelName !== modelName)
    );
  }, []);

  //retorna o carro
  const getModelByName = useCallback((modelName: string) => {
    return (
      registeredModels.find((item) => item.modelName === modelName) || null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
      ;
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
