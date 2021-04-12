import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ConfirmName() {
  const router = useRouter()
    useEffect(() => {
        router.push("/vote")
    },[])
    return <div>ham</div>;
}
