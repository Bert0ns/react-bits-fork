// SplitTextDemo.js
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { CODE_EXAMPLES } from "../../constants/ExampleConstants";
import { CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from '../../components/code/CodeExample';
import Crosshair from "../../content/Animations/Crosshair/Crosshair";
import { useRef, useState } from "react";

const CrosshairDemo = () => {
  const containerRef = useRef(null);
  const { crosshair } = CODE_EXAMPLES;

  const [targeted, setTargeted] = useState(true);

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box ref={containerRef} position="relative" className="demo-container" minH={300} overflow="hidden">
          <Crosshair containerRef={targeted ? null : containerRef} />

          <Flex direction="column" justifyContent="center" alignItems="center">
            <Text _hover={{ color: 'cyan' }} fontWeight={900} fontSize="4rem" as="a" href="https://github.com/DavidHDev/react-bits">Star on GitHub</Text>
            <Text position="relative" top="-10px" color="#444">(hover me)</Text>
          </Flex>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Options</h2>
          <Flex gap={2}>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setTargeted(!targeted);
              }}
            >
              Active on: <Text color={targeted ? "lightgreen" : "coral"}>&nbsp;{targeted ? 'Viewport' : 'Container'}</Text>
            </Button>
          </Flex>
        </div>

        <h2 className="demo-title-extra">Dependencies</h2>
        <div className="demo-details">
          <span>gsap</span>
        </div>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={crosshair} />
      </CodeTab>
    </TabbedLayout>
  );
};

export default CrosshairDemo;
