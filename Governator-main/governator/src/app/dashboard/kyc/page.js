"use client";

import { useState } from "react";
import { KycCard } from "./components/KycCard";
import { levels } from "./components/kycHelper";

const KYCPage = () => {
  const [kycState, setKycState] = useState("not complete");

  const show = (id) => {
    setKycState(String(id));
  };

  return (
    <section className="space-y-8 my-10 pb-3">
      <h3 className="card-title sticky top-0 left-0 bg-white duration-300">
        {" "}
        My Kyc level : {`Level ${kycState !== "3" ? kycState : "complete"}`}
      </h3>
      <div className=" flex items-center gap-20 flex-wrap  justify-center duration-300">
        {levels.map((kyc) => (
          <div>
            <KycCard {...kyc} showLevel={() => show(kyc.level)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default KYCPage;
