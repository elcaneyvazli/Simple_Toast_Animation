import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="w-full h-screen bg-primary relative">
      <div className="absolute bottom-32 right-32 z-40">
        <AnimatePresence>
          {show && (
            <motion.div
              className="dark:bg-dark-input-bg bg-white border border-input-border dark:border-dark-input-border rounded-main z-40"
              initial={{ opacity: 0, y: 100 , x: 0}}
              animate={{ opacity: 1, y: 0 , x: 0}}
              exit={{ opacity: 0, y: 0, x: 100}}
            >
              <div className="py-8 px-16 flex flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-0">
                  <h1 className="text-primary dark:text-input-bg text-lg font-medium">
                    Task Created
                  </h1>
                  <p className="text-light text-md line-clamp-1 w-full">
                    Task has been created successfully
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-center p-8 rounded-full bg-white dark:bg-primary absolute -top-16 -right-16 border border-input-border dark:border-dark-input-border cursor-pointer"
                onClick={() => setShow(false)}
              >
                <XMarkIcon className="h-16 w-16 text-primary dark:text-input-bg" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
