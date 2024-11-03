import MoyasarForm from "components/Booking/MoyasserForm";
import { useSearchParams } from "next/navigation";

export default function () {
    const searchParams = useSearchParams();
    const order_id = searchParams.get("order_id");
    const package_id = searchParams.get("package_id");

    return (
        <MoyasarForm
            callbackUrl="http://localhost:3000/other/page/for/success/page"
            amount={299}
        />
    )
}