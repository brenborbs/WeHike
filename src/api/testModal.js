import { ModalWrapper } from '../components/modals'

export default function TestModal({data}) {
  return (
    <ModalWrapper>
      <div>The data is: {data}</div>
    </ModalWrapper>
  )
}