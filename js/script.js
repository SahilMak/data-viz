/**
 * Created by Sahil Makhijani on 3/24/2017.
 */
var domain = 'data.consumerfinance.gov';
var setID = 'jhzv-w97w';
var query = 'product=Student%20loan&$where=date_received%20between%20%272016-01-01T00:00:00%27%20and%20%272017-01-01T00:00:00%27';
var title = 'Number of Student Loan Complaints by Year';

$(function () {
    $.get('https://' + domain + '/resource/' + setID + '.json?' + query, function (data) {
        console.log(data);
    });
});