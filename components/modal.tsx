'use client'
import type { FC } from 'react'

type Props = {
  children?: [] | any,
  classes?: string,
  handleClose: () => void,
  open: boolean,
}

const Modal: FC<Props> = ({ children, classes, handleClose, open }) => {
  const backdrop = typeof window !== 'undefined' ? document.getElementById("modal-backdrop") : null;
  backdrop?.addEventListener('click', handleClose)

  return (
    <div className={`modal ${open ? 'open' : ''} ${classes ? classes : ''}`}>
      <span className="close" onClick={handleClose}>&times;</span>
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal