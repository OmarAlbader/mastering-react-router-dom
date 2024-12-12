import React from "react";
// import { useLocation } from "react-router-dom";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import { useLocation } from "react-router-dom";

const ContributePage = () => {
  const { state } = useLocation();

  return (
    <>
      <h2 className="mb-3 text-center">Email: {state.email}</h2>
      <h2 className="mb-3 text-center">Issue: 🐛 Bug Report</h2>
      <form className="mx-auto max-w-sm space-y-3">
        <TextArea />
        <Button>Submit new issue</Button>
      </form>
    </>
  );
};

export default ContributePage;
