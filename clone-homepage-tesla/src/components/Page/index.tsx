import DefaultOverlayContent from "../DefaultOverlayContent";
import { Container, Spacer } from "./styles";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "./UniqueOverlay";

export const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model 3",
            "Model Y",
            "Model S",
            "Model X",
            "Solar Panels",
            "Solar Roof",
            "Accessories",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};
