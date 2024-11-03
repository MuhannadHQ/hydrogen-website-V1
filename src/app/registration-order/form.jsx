import MoyasarForm from "components/Booking/MoyasserForm";

export default function ({ callbackUrl, amount }) {

    return (
        <MoyasarForm
            callbackUrl={callbackUrl}
            amount={amount}
        />
    )
}