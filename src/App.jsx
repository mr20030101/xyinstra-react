import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router";
import axios from "axios"; 
import PieChart from "./components/PieChart";
import RiskSummary from "./components/RiskSummary";
import StaffReplacementCosts from "./components/StaffReplacementCosts";
import DualBarChart from "./components/DualBarChart";

 
export default function SummaryLayout() {

    return (
        <div className="min-h-screen bg-white p-6">

            {/* PAGE 1 START */}
            <div className="mx-auto max-w-[1400px]">

                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                    <div className="w-1/3"></div>

                    <div className="w-1/3 text-center">
                        <span className="title-6">Review Summary Report - [LEADERSHIP]</span>
                    </div>

                    <div className="w-1/3 text-right">
                        <div className="text-xs">
                            Printed: 12/07/2025
                        </div>
                    </div>
                </div>

                {/* Sub header */}
                <div className="flex items-start justify-between border-b-2 pb-4 border-primary my-4">
                    <div className="w-1/3">
                        <span className="title-7">Leadership - Review</span>
                    </div>

                    <div className="w-1/3 text-right">
                        <div className="text-xs title-7">Risk Cost Centre Report</div>
                    </div>
                </div>

                {/* Totals */}
                <div className="flex items-start justify-between my-4">
                    <div className="w-1/3">
                        <span className="title-7">Review Totals - [Levels]</span>
                    </div>

                    <div className="w-1/3 justify-end items-center flex gap-2">
                        <span className="large font-bold">Review Total:</span>

                        <div>
                            <span>Completed: </span>
                            <span className="px-4 py-2 bg-success rounded-xl text-white font-bold">
                                120
                            </span>
                        </div>

                        <div>
                            <span>Pending: </span>
                            <span className="px-4 py-2 bg-warning rounded-xl text-white font-bold">
                                8
                            </span>
                        </div>
                    </div>
                </div>

                {/* Risk Level */}
                <div className="flex items-start justify-end my-4">
                    <div className="w-1/3 justify-end items-center flex gap-2">
                        <span className="large font-bold">Risk Level:</span>

                        <div className="text-danger">
                            <span>High</span>
                        </div>
                    </div>
                </div>

                {/* Estimated Risk Cost */}
                <div className="text-center mt-4 mb-6">
                    <h2 className="text-2xl font-medium">Estimated Risk | Cost Centre Loss</h2>

                    <div className="mt-3 text-4xl font-extrabold text-red-700">
                        $2,224,475.00
                    </div>
                </div>

                {/* PLACEHOLDER FOR YOUR PANELS / GRAPHS / BOXES */}
                <div className="mt-10">
                    {/* <div className="text-center text-gray-400">
                        (Charts / Panels / Boxes go here…)
                    </div> */}

                    <div className="grid grid-cols-3 gap-3">
                        <div className="p-4 border rounded-xl flex items-center justify-between">
                            <div className="flex flex-col items-center">
                                NPS

                                <span className="border rounded-lg p-2"> 
                                    75%
                                </span>
                            </div>
                            <div className="">
                                <PieChart />
                            </div>
                            <div className="flex flex-col items-center">
                                KPI %

                                <span className="border rounded-lg p-2">
                                    75%
                                </span>
                            </div>
                        </div>
                        <div className="p-4 border rounded-xl">
                            <RiskSummary />
                        </div>
                        <div className="p-4 border rounded-xl">
                            <StaffReplacementCosts /> 
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 START */}
            <div className="mx-auto max-w-[1400px] mt-10">

                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                    <div className="w-1/3"></div>

                    <div className="w-1/3 text-center">
                        <span className="title-6">Review Summary Report - [LEADERSHIP]</span>
                    </div>

                    <div className="w-1/3 text-right">
                        <div className="text-xs">
                            Printed: 12/07/2025
                        </div>
                    </div>
                </div>

                {/* PLACEHOLDER FOR PAGE 2 CONTENT */}
                <div className="mt-10 p-10 border rounded-xl">
                    <div className="text-center text-gray-400">
                       <div className="grid grid-cols-2 gap-6">
                            <div>
                                <DualBarChart />
                            </div>
                       </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
