
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



    beforeEach(function () {
        cy.visit(Cypress.env("qaurl"))//here using env variables concept

        cy.login(Cypress.env("username"), Cypress.env("password")) // here using env variables concept

        cy.elementToVisible(Admin.adminvisibleInput())
        cy.clickonelement(Admin.adminmoduleInput())
        cy.clickonelement(jobs.jobmoduleInput())

    });


    it('verify add job title functionality', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {

            return false;
        });

        cy.clickonelement(jobs.jobtitleInput())
        cy.clickonelement(jobs.Addbutton())
        cy.elementToVisible(jobs.jobtitlenamevisibleInput())
        cy.enterText(jobs.jobtitlenameInput(), jobsdata.jobtitle)
        //assertions
        cy.containstextvisible(jobs.jobdescriptionvisible())

        //actions

        cy.enterText(jobs.jobdescriptionnameInput(), jobsdata.jobdescrption)

        cy.clickonelement(jobs.jobtitlespecification())
        // cy.xpath('//div[@class="oxd-file-div oxd-file-div--active"]').attatchfile('admin/16. Custom commands and retries(1).txt')

        cy.enterText(jobs.jobtitleaddnote(), jobsdata.Addnote)
        cy.clickoncontains(jobs.jobtitlesavebutton())
        //cy.contains('automation tester').should("be.visible")

    })


    it('verify pay grade  functionality', () => {

        cy.clickonelement(paygrade.paygrademoduleInput())
        cy.clickonelement(paygrade.paygradeaddbutton())

        //assertions
        cy.containstextvisible(paygrade.paygradeaddvisibleInput())
        cy.enterText(paygrade.paygradeaddtypeInput(), jobsdata.paygrade)
        cy.clickoncontains(paygrade.paygradesavebutton())

        //cy.contains('Gradeone').should("be.visible")


    })

    it('verify employment status functionality', () => {

        cy.clickoncontains(empstatus.empstatusmoduleInput())

        cy.clickoncontains(empstatus.empstatusaddbutton())

        //assertions

        cy.containstextvisible(empstatus.empstatusaddvisibleInput())

        //actions

        cy.enterText(empstatus.empstatustypeInput(), jobsdata.empstatus)
        cy.clickoncontains(empstatus.empstatussavebutton())

        //cy.contains('regular work').should("be.visible")

    })


    it('verify job categories functionality', () => {

        cy.clickoncontains(jobcategory.jobcatmoduleInput())
        cy.clickoncontains(jobcategory.jobcataddbutton())

        //assertions
        cy.containstextvisible(jobcategory.jobcatnamevisibleInput())

        //actions
        cy.enterText(jobcategory.jobcatnametypeInput(), jobsdata.jobcategory) //here using custom command
        cy.clickoncontains(jobcategory.jobcatsavebutton())

        // cy.contains('testing field').should("be.visible")

    })

    it('verify workshift  functionality', () => {

        cy.clickoncontains(workshift.workshiftmoduleInput())

        cy.clickoncontains(workshift.workshiftaddbutton())

        cy.enterText(workshift.workshiftnameInput(), jobsdata.workshiftname)

        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[3]').type("09:00 AM")
        cy.xpath('(//input[@placeholder="hh:mm"])[2]').type("05:00 PM")
        cy.contains('8.00').should("be.visible")


        cy.enterText(workshift.workshiftempnum(), jobsdata.assignedemployees)

        cy.clickonelement(workshift.workshiftsavebutton())

        // cy.contains('morning shift').should("be.visible")

    })

})           
