export class SupplierRequest {
  constructor() {
    this.companyName = "";
    this.businessName = "";
    this.licenseNo = "";
    this.registrationNo = "";
    this.regPLace = "";
    this.regDate = new Date();
    this.subsidiaries = "";
    this.ownership = "";
    this.vatNo = "";
    this.taxregistrationNo = "";
    this.telephoneNo = "";
    this.directors = "";
    // Primary Details
    this.buildingDetail = "";
    this.street = "";
    this.city = "";
    this.country = "";
    this.postCode = "";
    this.email = "";
    this.url = "";
    this.billingAddress = "";
    // Billing
    this.accountName = "";
    this.accountNumber = "";
    this.bankName = "";
    this.bankAddress = "";
    this.swiftCode = "";
    this.sortCode = "";
    this.ibanCode = "";
    // insurance
    this.indemnity = false;
    this.generalLiability = false;
    this.employerLiability = false;
    this.risks = false;
    this.partyliability = false;
    this.expiryDate = new Date();
    // Health and Safety
    this.accreditation = false;
    this.accreditationDetails = "";
    this.policy = false;
    this.policyDetails = "";
    this.safetyEnforcement = false;
    this.safetyenforcementDetails = "";
    // environment
    this.isoCertified = false;
    // Quality
    this.qualityIso = false;
    this.qualityPolicy = false;
    this.qualityRecorded = false;
    this.qualityTraining = false;
    this.qualityStaff = false;
    this.qualitySupplier = false;
    // BusinessIntegrity
    this.businessIso = false;
    this.offences = false;
    this.codeConduct = false;
    this.codeconductDetails = "";
    this.businessTraninig = false;
    this.businesstraninigDetails = "";
    this.businessOffences = false;
    this.businessoffencesDetails = "";
    this.corruption = false;
    this.corruptionDetails = "";
    this.criminalOffence = false;
    this.criminaloffenceDetails = "";
    this.agreement = false;
    this.agreementDetails = "";
    this.subContractors = false;
    this.subcontractorsDetails = "";
    this.steps = "";
    this.wspConduct = false;
    //  Political
    this.interest = false;
    this.interestDetails = "";
    this.wspEmployees = false;
    this.wspemployeeDetails = "";
    this.wspAgreement = false;
    this.wspagreementDetails = "";
    this.favours = false;
    this.favoursDetails = "";
    // files
    this.vat = false;
    this.validTrade = false;
    this.bankDetails = false;
    this.taxCard = false;
    this.iso9001 = false;
    this.iso14001 = false;
    this.companyProfile = false;
    this.oshas18001 = false;
    this.InsuranceCopies = false;
    // Completed
    this.name = "";
    this.designation = "";
    this.electronicSign = "";
    this.organizationStamp = "";
    this.attachmentPath = [];  
    this.stamp = "";   
  }
}

export default SupplierRequest;
