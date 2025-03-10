
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const DisclaimerDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-black via-gray-900 to-purple-900 border border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent pb-2">
            Welcome to Tesla GPT & Einstein GPT
          </DialogTitle>
          <DialogDescription className="text-gray-300 leading-relaxed space-y-4 pt-2">
            <p className="text-lg font-medium text-white/90">
              Experience revolutionary AI conversations with two of history's greatest minds.
            </p>
            <p>
              Please note that these AI models are designed to simulate interactions and should be used for educational and entertainment purposes only.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center pt-4">
          <Button
            onClick={handleAccept}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-purple-500/25"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            I Understand, Let's Begin
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
