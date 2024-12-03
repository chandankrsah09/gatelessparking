import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMySpotStore } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SpotAddress from "./spot-address";
import NumberOfSpots from "./number-of-spots";

const totalSteps = 4;
const stepIncrement = 100 / totalSteps;

type props = {
  id?: string | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function AddLocationDialog({ id = null, open, setOpen }: props) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const mySpotStore = useMySpotStore();
  const router = useRouter();

  useEffect(() => {
    setStep(1);

    //   fetch data
    const fetchData = () => {
      console.log("fetch data");
    };
    if (id && open) {
      fetchData();
    } else {
      mySpotStore.restart();
    }
  }, [id, open]);

  const handleListAnother = () => {
    // handle list another
    setStep(1);
    mySpotStore.restart();
  };
  const handleFinalSubmit = () => {
    // save the data in the db
    console.log(mySpotStore.data);
  };

  const handleNextStepChange = () => {
    if (step === totalSteps) return

    setStep(currentStep => currentStep + 1)
  }

  const handleOnInteracOutside = (e:Event) => {
    const classes: Array<Array<string>> = []
      
      e.composedPath().forEach((el:any) => {
        if (el.classList) {
          classes.push(Array.from(el.classList))
        }
      })

      if (classes.join("_").includes("pac-container")) {
        e.preventDefault()
      }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent onInteractOutside={handleOnInteracOutside}>
        <DialogHeader>
          <DialogTitle>List Your Spot.</DialogTitle>
          <div className="space-y-8">
            <Progress value={step * stepIncrement}/>
            {{
                1:<SpotAddress onNext={handleNextStepChange} onPrev={function (): void {
                    throw new Error("Function not implemented.");
                } }/>,
                2:<NumberOfSpots />
            }[step]}
          </div>
        </DialogHeader>
        <DialogFooter>
          <div className={`${step < totalSteps ? "hidden" : `flex flex-col mt-4 w-full space-y-2`}`}>
            <Button type="button" onClick={handleFinalSubmit}>
              Submit
            </Button>
            <Button type="button" variant="outline" onClick={handleListAnother}>
              List Another
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddLocationDialog;
