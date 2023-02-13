import data from "../../fixtures/login/logincredentials.json"
import jobsdata from "../../fixtures/admin/jobsdata.json"

//import  Loginpage from "../../pageobjects/loginpage.po"
//const login = new Loginpage()

import Adminpage from "../../pageobjects/Admin module/Adminpage.po"
const Admin = new Adminpage()

import jobspage from "../../pageobjects/Admin module/jobspage.po"
const jobs = new jobspage()

import paygradepage from "../../pageobjects/Admin module/paygrade.po"
const paygrade = new paygradepage()

import employmentstatuspage from "../../pageobjects/Admin module/employmentstatus.po"
const empstatus = new employmentstatuspage()

import jobcategoriespage from "../../pageobjects/Admin module/jobcategories.po"
const jobcategory = new jobcategoriespage()

import workshiftpage from "../../pageobjects/Admin module/workshift.po"
const workshift = new workshiftpage()

describe('verify job sub module  functionaity', () => {

  // const endpoint ="/web/index.php/auth/login"


  beforeEach(function () {
    cy.visit(Cypress.env("qaurl"))//here using env variables concept

    ///login.loginwithcreds(data.username,data.password)
    cy.login(Cypress.env("username"), Cypress.env("password")) // here using env variables concept

    //cy.xpath(Admin.adminvisibleInput()).should("be.visible")
    cy.elementToVisible(Admin.adminvisibleInput())

    // cy.xpath(Admin.adminmoduleInput()).click();
    cy.clickonelement(Admin.adminmoduleInput())

    // cy.xpath(jobs.jobmoduleInput()).click();
    cy.clickonelement(jobs.jobmoduleInput())


  });






  it('verify add job title functionality', () => {







    // cy.xpath(jobs.jobtitleInput()).click() //jobstitle 
    cy.clickonelement(jobs.jobtitleInput())

    //cy.xpath(jobs.Addbutton()).click() //add button
    cy.clickonelement(jobs.Addbutton())
    // cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    //assertions

    // cy.xpath(jobs.jobtitlenamevisibleInput()).should("be.visible") //job title name
    cy.elementToVisible(jobs.jobtitlenamevisibleInput())


    //cy.xpath(jobs.jobtitlenameInput()).type(jobsdata.jobtitle) //job title
    cy.enterText(jobs.jobtitlenameInput(), jobsdata.jobtitle)



    //assertions
    // cy.contains(jobs.jobdescriptionvisible()).should("be.visible")//job description visible or not
    cy.containstextvisible(jobs.jobdescriptionvisible())
    //actions

    // cy.xpath(jobs.jobdescriptionnameInput()).type(jobsdata.jobdescrption)//job description
    cy.enterText(jobs.jobdescriptionnameInput(), jobsdata.jobdescrption)


    // cy.xpath(jobs.jobtitlespecification()).click() //job specification browse type
    cy.clickonelement(jobs.jobtitlespecification())
    // cy.xpath('//div[@class="oxd-file-div oxd-file-div--active"]').attatchfile('admin/16. Custom commands and retries(1).txt')



    // cy.xpath(jobs.jobtitleaddnote()).type(jobsdata.Addnote)//add note
    cy.enterText(jobs.jobtitleaddnote(), jobsdata.Addnote)

    // cy.contains(jobs.jobtitlesavebutton()).click()
    cy.clickoncontains(jobs.jobtitlesavebutton())

    cy.contains('automation tester').should("be.visible")




  })























  it('verify pay grade  functionality', () => {








    // cy.xpath(paygrade.paygrademoduleInput()).click() //pay grade module
    cy.clickonelement(paygrade.paygrademoduleInput())

    //cy.xpath(paygrade.paygradeaddbutton()).click() //add button for paygrade
    cy.clickonelement(paygrade.paygradeaddbutton())
    //assertions
    // cy.contains(paygrade.paygradeaddvisibleInput()).should("be.visible") //add pay grade visible or not
    cy.containstextvisible(paygrade.paygradeaddvisibleInput())

    // cy.xpath(paygrade.paygradeaddtypeInput()).type(jobsdata.paygrade) //add pay grade 
    cy.enterText(paygrade.paygradeaddtypeInput(), jobsdata.paygrade)

    // cy.contains(paygrade.paygradesavebutton()).click() // save add pay grade button
    cy.clickoncontains(paygrade.paygradesavebutton())

    // cy.contains('Gradeone').should("be.visible")

    // cy.xpath(paygrade.editpaygradetypeInput()).type(jobsdata.editpaygrade)

    // cy.xpath(paygrade.editpaygradesavebutton()).click();

    // cy.xpath(paygrade.currencyaddbutton()).click() //this is for add currency button

    // cy.xpath(paygrade.selectdropdownmenu()).click();// this is for selecting from drop down

    // cy.contains(paygrade.selectrupee()).click();

    // cy.xpath(paygrade.minimumsalary()).type(jobsdata.minimumsalary)

    // cy.xpath(paygrade.maximumsalary()).type(jobsdata.maximumsalary)

    // cy.contains(paygrade.currencysavebutton()).click();

    // cy.contains(paygrade.rupeevisible()).should("be.visible")

    // cy.contains(paygrade.gradevisible()).should("be.visible")

  })



  it('verify employment status functionality', () => {







    //     // cy.contains(empstatus.empstatusmoduleInput()).click() //employment status clicking 
    cy.clickoncontains(empstatus.empstatusmoduleInput())

    //     // cy.contains(empstatus.empstatusaddbutton()).click() //add button clicking
    cy.clickoncontains(empstatus.empstatusaddbutton())

    //      //assertions
    //      //cy.contains(empstatus.empstatusaddvisibleInput()).should("be.visible") //visible or not add employment status
    cy.containstextvisible(empstatus.empstatusaddvisibleInput())

    //     // cy.xpath(empstatus.empstatustypeInput()).type(jobsdata.empstatus) //type emp status
    cy.enterText(empstatus.empstatustypeInput(), jobsdata.empstatus)

    //     // cy.contains(empstatus.empstatussavebutton()).click() //save button clicking
    cy.clickoncontains(empstatus.empstatussavebutton())

    //cy.contains('regular work').should("be.visible")



  })


  it('verify job categories functionality', () => {






    // cy.contains(jobcategory.jobcatmoduleInput()).click() //job categories module clicking
    cy.clickoncontains(jobcategory.jobcatmoduleInput())

    //cy.contains(jobcategory.jobcataddbutton()  ).click() // add button clicking
    cy.clickoncontains(jobcategory.jobcataddbutton())
    //assertions

    //cy.contains(jobcategory.jobcatnamevisibleInput()).should("be.visible") //job category name visible or not
    cy.containstextvisible(jobcategory.jobcatnamevisibleInput())
    //cy.elementToVisible(jobcategory.jobcatnamevisibleInput())

    //cy.xpath(jobcategory.jobcatnametypeInput()).type(jobsdata.jobcategory)
    cy.enterText(jobcategory.jobcatnametypeInput(), jobsdata.jobcategory) //here using custom command

    // cy.contains(jobcategory.jobcatsavebutton()).click()
    cy.clickoncontains(jobcategory.jobcatsavebutton())

    //cy.xpath(jobcategory.jobcatverify()).should("be.visible")
    // cy.elementToVisible(jobcategory.jobcatverify())

    // cy.contains('testing field').should("be.visible")



  })



  it('verify workshift  functionality', () => {







    // cy.contains(workshift.workshiftmoduleInput()).click()
    cy.clickoncontains(workshift.workshiftmoduleInput())

    // cy.contains(workshift.workshiftaddbutton()).click()
    cy.clickoncontains(workshift.workshiftaddbutton())

    //cy.xpath(workshift.workshiftnameInput()).type(jobsdata.workshiftname)
    cy.enterText(workshift.workshiftnameInput(), jobsdata.workshiftname)

    cy.xpath('(//input[@class="oxd-input oxd-input--active"])[3]').type("09:00 AM")
    cy.xpath('(//input[@placeholder="hh:mm"])[2]').type("05:00 PM")
    cy.contains('8.00').should("be.visible")

    //cy.xpath(workshift.workshiftempnum()).type(jobsdata.assignedemployees)
    cy.enterText(workshift.workshiftempnum(), jobsdata.assignedemployees)

    // cy.xpath(workshift.workshiftsavebutton()).click()
    cy.clickonelement(workshift.workshiftsavebutton())

    // cy.contains('morning shift').should("be.visible")



  })


})          
