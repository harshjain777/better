import React, { useEffect, useState } from "react";

function Calci() {
  const [len, setLen] = useState(300000); 
  const [downPayment, setDownPayment] = useState(len / 5); 
  const [zipcode, setZipcode] = useState(400708); 
  const [loanTerm, setLoanTerm] = useState(30); 
  const [monthlyPayment, setMonthlyPayment] = useState(0); 
  const interestRate = 6.5; 

  useEffect(() => {
    const principal = len - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const payment = Math.round(
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    );

    setMonthlyPayment(payment);
    setDownPayment(Math.round(len / 5)); 
  }, [len, downPayment, loanTerm, interestRate]);

  return (
    <div className="w-full py-10 bg-green-50">
      <div className="flex flex-col items-start gap-3 py-20 px-20">
        <div className="text-5xl font-semibold text-gray-800">
          Mortgage Calculator
        </div>
        <div className="text-lg py-5 md:w-[70%] capitalize font-light">
          Use our mortgage calculator to get accurate estimates for your monthly mortgage payments and more.
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex w-[80%] bg-transparent py-10 items-center justify-between">
          <input
            type="text"
            name="HomePrice"
            className="border-[1px] border-zinc-800 rounded-lg py-2 px-3 text-2xl"
            value={len.toLocaleString()}
            onChange={(e) => setLen(Number(e.target.value.replace(/,/g, '')))}
          />
          <div className="mb-11">
            <div className="text-xl p-2">Monthly Payment</div>
            <div className="border-[1px] bg-white border-zinc-800 rounded-lg py-2 px-3 text-2xl">
              {monthlyPayment.toLocaleString()}/monthly
            </div>
          </div>
          <button className="border-[1px] border-zinc-800 rounded-lg py-2 px-3 text-xl">
            Get Pre-approved
          </button>
        </div>

        <input
          type="range"
          className="py-10 w-[70%]"
          min={50000}
          max={3000000}
          value={len}
          onChange={(e) => setLen(Number(e.target.value))}
        />
      </div>

      <div className="flex items-center py-10 justify-center gap-20 text-xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <label className="text-lg">Zipcode:</label>
            <input
              type="number"
              className="zipcode py-2 px-3 border-[1px] border-zinc-800 rounded-lg"
              value={zipcode}
              placeholder="zipcode"
              onChange={(e) => setZipcode(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center gap-5">
            <label className="text-lg">Down Payment:</label>
            <input
              type="text"
              value={downPayment.toLocaleString()}
              className="py-2 px-3 border-[1px] border-zinc-800 rounded-lg"
              readOnly
            />
            <span>({((downPayment / len) * 100).toFixed(2)}%)</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <label className="text-lg">Interest Rate:</label>
            <input
              type="text"
              value={`${interestRate.toFixed(2)}%`}
              className="py-2 px-3 border-[1px] border-zinc-800 rounded-lg"
              readOnly
            />
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="loanTerm" className="text-lg">Length of Loan:</label>
            <select
              id="loanTerm"
              name="loanTerm"
              value={loanTerm}
              className="border-[1px] border-zinc-800 text-lg rounded-lg py-2 px-3"
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            >
              <option value="10">10 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calci;
