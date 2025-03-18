import { Tab } from "@headlessui/react";
import React, { useState } from "react";


function TabNavigationAT() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Idle Start Stop
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Torque Assist
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Brake Energy Regeneration
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Advance Dual Battery System
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <AutoMode />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <SportMode />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <SnowMode />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              {/* <RegenerativeBraking /> */}
              <LockMode />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const AutoMode = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/Auto.webp')] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-1">
            <div className="my-auto mx-5 font-light text-center pt-10 pr-[30]">
              <p>
                The vehicle uses 2-wheel drive by default to prioritize fuel
                efficiency. On encountering a low traction situation, the
                sensors detect slippage and automatically allocate power to the
                rear wheels through an electronic control coupling device,
                shifting the vehicle into 4 WHEEL DRIVE mode.
              </p>
            </div>
            <div className="col-span-2">
              <>
                <div className="mt-24 ml-auto mr-1">
                  {/* CELESTIAL BLUE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/GV-Car-915378+(2).webp"
                    alt="CELESTIAL BLUE"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SportMode = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/Lock.webp')] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-1">
            <div className="my-auto mx-5 font-light text-center pt-10 pr-[30]">
              <p>
                The engine provides a sportier performance, while the Control
                Unit anticipates the vehicle motion with the help of the
                sensors. The ESP limits traction control intervention to
                maximise the driver’s sense of control over the vehicle.
              </p>
            </div>
            <div className="col-span-2">
              <>
                <div className="mt-24 ml-auto mr-1">
                  {/* CELESTIAL BLUE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/GV-Car-915378+(2).webp"
                    alt="CELESTIAL BLUE"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SnowMode = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/Snow.webp')] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-1">
            <div className="my-auto mx-5 font-light text-center pt-10 pr-[30]">
              <p>
                The vehicle pre-dominantly uses 4-wheel drive to allocate
                optimal drive power to all four wheels to support stable
                driving. On detecting loss of traction, the ESP allows traction
                control to intervene and stabilize the drive.
              </p>
            </div>
            <div className="col-span-2">
              <>
                <div className="mt-24 ml-auto mr-1">
                  {/* CELESTIAL BLUE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/GV-Car-915378+(2).webp"
                    alt="CELESTIAL BLUE"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const LockMode = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/Lock.webp')] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-1">
            <div className="my-auto mx-5 font-light text-center pt-10 pr-[30]">
              <p>
                Optimal for driving over slippery or rough roads. The torque is
                fed to the rear wheels even before throttle input is applied.
                The ESP enhances extrication performance by using the traction
                control system to wheels with low grip level and maximizes the
                torque allocation to wheel with adequate grip.
              </p>
            </div>
            <div className="col-span-2">
              <>
                <div className="mt-24 ml-auto mr-1">
                  {/* CELESTIAL BLUE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/tabs/GV-Car-915378+(2).webp"
                    alt="CELESTIAL BLUE"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabNavigationAT;
