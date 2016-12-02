'use strict';

/**
 * @ngdoc service
 * @name ohanaApp.expenseservice
 * @description
 * # expenseservice
 * Service in the ohanaApp.
 */
angular.module('ohanaApp')
  .service('expenseservice', function (filterFilter, $firebaseArray) {
     this.expense = {
            BillId: "",
            Chapter: "",
            eventdate: "",
            email: "",
            SubmitDate: "",
            SubmitBy: "",
            SubmitAddress: "",
            Description: "",
            PaymentStatus: "Pending",
            PaymentStatusBy: "",
            PaymentStatusDate: "",
            Amount: 0,
            ImageURL: [],
            Line: [{
                "ID": "1",
                "Description": "Mileage Rate - Travel @.25/mile",
                "Quantity": 0, // this.exp.miles,
                "Rate": 0.25,
                "Amount": 0 //(this.exp.miles * .25)
            }, {
                "ID": "2",
                "Description": "Trailer Mileage Rate @.40/mile",
                "Quantity": 0, //this.exp.trailermiles,
                "Rate": 0.4,
                "Amount": 0 //(this.exp.trailermiles * .4)
            }, {
                "ID": "3",
                "Description": "",
                "Quantity": "1",
                "Rate": 1,
                "Amount": 0
            }, {
                "ID": "4",
                "Description": "",
                "Quantity": "1",
                "Rate": 1,
                "Amount": 0
            }]

        }

        this.addNewImage = function(obj) {

            this.expense.ImageURL.push(obj);
        }

        this.addNewImage = function(obj, BillId) {

                this.expense.ImageURL.push(obj);
            }
            // var ref = firebase.database().ref('/expense').on('value', function(snapshot) {
            //     $scope.expense = snapshot.val();

        // })

        this.getExpense = function() {
            console.log("Get Expense", expense);
            return expense;
        };

        this.addNewList = function(line) {
            expense.Line.push()

        }

        this.getExpenseAt = function(_billid) {
            this.getExpense();
            return filterFilter(expense, {
                BillId: _billid
            })[0];
        };


        this.getExpenseChapterList = function() {
            return Chapterlist;
        }



        /******************************************************
         *        View Expense                                 *
         *******************************************************/

        this.getViewExpenseData = function() {

            var ref = firebase.database().ref('/expense').orderByChild("SubmitDate");
            var viewExpenseList = $firebaseArray(ref);

            console.log("Service Expense List return", viewExpenseList);
            return {
                viewExpenseList: viewExpenseList,
            }

        }


        /******************************************************
         *        REPORT                                *
         *******************************************************/


        this.buildTableBody = function(data, columns) {
            var body = [];
            body.push(columns);

            data.forEach(function(row) {
                var dataRow = [];

                columns.forEach(function(column) {
                    dataRow.push(row[column].toString());
                })

                body.push(dataRow);
            });
            return body;
        }

        this.table = function(data, columns) {
            console.log("Table Function inside", data, columns);
            return {
                style: 'demoTable',
                widths: ['60', '150', '60', '60', '60', '60', '60', '60', '200'],

                table: {
                    headerRows: 1,
                    body: this.buildTableBody(data, columns)
                }
            };
        }
  });