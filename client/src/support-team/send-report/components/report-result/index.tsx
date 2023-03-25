import React from "react";
import { Result } from "antd";
import { uid } from "../../../../utils";

const ReportResult = () => {
    return (
        <Result
            status="success"
            title="Your Report Was Successfully Sent!"
            subTitle={`Report number: ${uid(10)} .Thank you for making our service better!`}
        />
    )
}

export default ReportResult;