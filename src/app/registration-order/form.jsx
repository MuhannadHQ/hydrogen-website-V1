import MoyasarForm from "components/Booking/MoyasserForm";

export default function () {
    return (
        <MoyasarForm
            callbackUrl="http://localhost:3000/order?orderDetails=N4IgDghgngtgpgOwC4Fk5IBYHsAmIBcIIANCAJYIDOSEANrREmVggMJYyQJQFGmUBjAMqsyvEuAgCA1hADmcAJIARXgCc4cgK4M1ErGpxw1AFSw1aBAIwAGAJx3SYNbi0CklAgG1QkGfLheFjgATTgIPVIaBGkTKDBAwgRgiQBHJB58Kyc1MgFE2wdSIwA3PLgABVz8ghtSMjxCDW1dCWdXdxRcOEtCOjAMCBAAXwBdUi0kGAIEHVpSAyM1FXFhoA"
            amount={100}
        />
    )
}