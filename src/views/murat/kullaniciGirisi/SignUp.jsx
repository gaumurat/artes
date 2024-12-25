import React, { useState } from 'react'
import {
  CCol,CCard,CCardBody,CCardHeader,
  CButton,
  CForm,
  CRow,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

import { Button } from 'react-bootstrap';

function SignUp() {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>Sample Form</CCardHeader>
        <CCardBody> 
        <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackInvalid="Lütfen Ad bilgisi Giriniz."
          id="validationCustom01"
          label="Ad"
          required
        />
      </CCol>
      <CCol md={8}>       
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            type="text"
            aria-describedby="inputGroupPrependFeedback"
            feedbackValid="Please choose a username."
            id="validationCustomUsername"
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={2}>
        <CFormInput
          type="text"
          aria-describedby="validationCustom03Feedback"
          feedbackInvalid="Please provide a valid city."
          id="validationCustom03"
          label="City"
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          aria-describedby="validationCustom04Feedback"
          feedbackInvalid="Please select a valid state."
          id="validationCustom04"
          label="State"
          required
        >
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="text"
          aria-describedby="validationCustom05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="validationCustom05"
          label="Zip"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>

      <CRow className="mb-2">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label col-form-label-sm">
          Email
        </CFormLabel>
        <CCol lg={4} sm={10}>
        <CFormInput
          type="text"
          className="form-control form-control-sm"
          aria-describedby="validationCustom05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="inputEmail3"
          required
        />
        </CCol>
      </CRow>

      <CRow className="mb-2">
        <CFormLabel htmlFor="soyad" className="col-sm-2 col-form-label col-form-label-sm">
          Soyad
        </CFormLabel>
        <CCol lg={4} sm={10}>
        <CFormInput
          type="text"
          className="form-control form-control-sm"
          aria-describedby="validationCustom05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="soyad"
          required
        />
        </CCol>
      </CRow>

    </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default SignUp
