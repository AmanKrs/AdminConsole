import React from "react";
import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductForm from "./ProductForm";
import ProductPricing from "./ProductPricing";
import AddProductMedia from "./AddProductMedia";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../../../utils/interceptor";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const steps = ["Product Info", "Add Media", "Pricing"];

export default function NewProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [productData, setProductData] = useState({});
  const [productAdded, setProductAdded] = useState(false);
  const [productAddedMsg, setProductAddedMsg] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [mediaData, setMediaData] = useState();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleFinish = async () => {
    console.log("ifblock", activeStep, steps.length);
    if (activeStep === steps.length) {
      try {
        console.log("result.data.msg");
        const result = await axios.post(
          "http://localhost:8082/products/addmedia",
          mediaData
        );
        console.log(result.data.msg);
        console.log("outpath", result);
        if (result.status == 200) {
          console.log("imagepath", result.data);
          productData.imageUrl = result.data.path;
          try {
            const result = await axios.post(
              "http://localhost:8082/products/addproduct",
              {
                productData,
              }
            );
            if (result.status == 200) {
              setProductAddedMsg(result.data.msg);
              setProductAdded(true);
              console.log("afterproductAdded", productAdded);
              setTimeout(() => {
                setActiveStep(0);
                setProductAdded(false);
                setErrorMsg(false);
              }, 1000);
            }
          } catch (e) {
            if (e) {
              console.log("error", e.response.status);
              setProductAdded(true);
              setProductAddedMsg(e.code);
              setErrorMsg(true);

              setTimeout(() => {
                setActiveStep(0);
                setProductAdded(false);
              }, 1000);
            }

            console.log(e);
          }
        }
      } catch (e) {
        if (e) {
          console.log("error", e.response.status);
          setProductAdded(true);
          setProductAddedMsg(e.message);
          setErrorMsg(true);

          setTimeout(() => {
            setActiveStep(0);
            setProductAdded(false);
          }, 1000);
        }

        console.log(e);
      }
    } else {
      console.log("esle finish", activeStep, steps.length);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setProductAdded(false);
  };
  return (
    <div>
      <h1 style={{ color: "#6e39cb" }}>New Product</h1>

      <Box sx={{ width: "80%", margin: "auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 && (
          <ProductForm
            productData={productData}
            setProductData={setProductData}
          />
        )}
        {activeStep === 1 && (
          <AddProductMedia
            productData={productData}
            setProductData={setProductData}
            mediaData={mediaData}
            setMediaData={setMediaData}
          />
        )}
        {activeStep === 2 && (
          <ProductPricing
            productData={productData}
            setProductData={setProductData}
          />
        )}
        {activeStep === steps.length ? (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {Object.keys(productData).map((elem) => {
                return (
                  <>
                    {elem}:{productData[elem]}
                  </>
                );
              })}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={handleFinish}>Finish</Button>
            </Box>
            <Snackbar
              open={productAdded}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity={errorMsg ? "error" : "success"}
                sx={{ width: "100%" }}
              >
                {productAddedMsg}
              </Alert>
            </Snackbar>
          </Fragment>
        ) : (
          <Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Confrim" : "Next"}
              </Button>
            </Box>
          </Fragment>
        )}
      </Box>
    </div>
  );
}
