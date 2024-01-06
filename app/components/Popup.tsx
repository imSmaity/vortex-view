import React, { useEffect, useRef } from 'react'
import Button from './Button'

interface IPopup {
  open: boolean
  children: React.ReactNode
  handleAction: () => void
  handleClose: (b: boolean) => void
  btnName: string
}

const Popup = ({
  open,
  children,
  handleAction,
  btnName,
  handleClose,
}: IPopup) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      event.stopPropagation()
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        if (event?.target?.id === 'modelBg') {
          handleClose(false)
        }
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, handleClose])

  const visibleClass = open ? '' : ' hidden'
  return (
    <div
      className={' absolute z-10' + visibleClass}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-gray-500 transition-opacity bg-[#ffffff] opacity-75"
      ></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          id="modelBg"
        >
          <div className="relative transform overflow-hidden rounded-sm bg-white text-left border-2 border-[#bbbbbb] transition-all bg-[#ffffff]">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">{children}</div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 pb-10">
              <Button variant="contained" handleClick={handleAction} size="md">
                {btnName}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
