import React, { useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import {useFormContext} from "react-hook-form";
const AlanContainer = (props) => {
  const rootElRef = useRef(null);
  const methods=useFormContext();

  useEffect(() => {
    const alanInstance = alanBtn({
      key: '923e0990515cefca5c7a72a75b453d522e956eca572e1d8b807a3e2338fdd0dc/stages', // Replace with your Alan AI key
      onCommand: (commandData) => {
        switch (commandData.command) {
          case 'enterPhoneNumber':
            
            props.onEnterPhoneNumber(commandData.value);
            methods.setValue('ph',commandData.value);
            break;
          case 'enterOTP':
            props.onEnterOTP(commandData.value);
            methods.setValue('ph',commandData.value);
            break;
          // Add more commands as needed
          default:
            break;
        }
      },
    });
    

    return () => {
      alanInstance.deactivate();
    };
  }, [props]);

  return (
    <div className="alan-btn-container">
      <div ref={rootElRef}></div>
    </div>
  );
};

export default AlanContainer;
