import { useAccount } from "../../hooks/use-account"

const DHome = () => {
  const { account } = useAccount()
  return (
    <div>ยินดีต้อนรับ คุณ {account?.firstName} {account?.lastName}
      <div>
        Role: {account?.role}
      </div>
      <div>
        ID: {account?.userId}
      </div>
      <div>
        Photo: {account?.photoUrl}
      </div>
    </div>
  )
}

export default DHome