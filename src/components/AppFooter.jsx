import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">Telif Hakları @2022</span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
        <a href="http://tnb.org.tr" target="_blank" rel="noopener noreferrer">
           Türkiye Noterler Birliği Tüm Hakları Saklıdır
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
