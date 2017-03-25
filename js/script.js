/**
 * Created by Sahil Makhijani on 3/24/2017.
 */
var domain = 'data.consumerfinance.gov';
var setID = 'jhzv-w97w';
var query = 'product=Student%20loan&$where=date_received%20between%20%272016-01-01T00:00:00%27%20and%20%272017-01-01T00:00:00%27'; // 2016
var title = 'Number of Student Loan Complaints by Year';

$(function () {
    // SODA API call
    $.getJSON('https://' + domain + '/resource/' + setID + '.json?$limit=10000&' + query, function (data) {
        // Create & initialize states array
        var states = [];
        for (var i = 0; i < 50; i++) {
            states.push(0);
        }
        // Gather states data
        $.each(data, function (key, value) {
            if (value.state == 'AL')
                states[0]++;
            else if (value.state == 'AK')
                states[1]++;
            else if (value.state == 'AZ')
                states[2]++;
            else if (value.state == 'AR')
                states[3]++;
            else if (value.state == 'CA')
                states[4]++;
            else if (value.state == 'CO')
                states[5]++;
            else if (value.state == 'CT')
                states[6]++;
            else if (value.state == 'DE')
                states[7]++;
            else if (value.state == 'FL')
                states[8]++;
            else if (value.state == 'GA')
                states[9]++;
            else if (value.state == 'HI')
                states[10]++;
            else if (value.state == 'ID')
                states[11]++;
            else if (value.state == 'IL')
                states[12]++;
            else if (value.state == 'IN')
                states[13]++;
            else if (value.state == 'IA')
                states[14]++;
            else if (value.state == 'KS')
                states[15]++;
            else if (value.state == 'KY')
                states[16]++;
            else if (value.state == 'LA')
                states[17]++;
            else if (value.state == 'ME')
                states[18]++;
            else if (value.state == 'MD')
                states[19]++;
            else if (value.state == 'MA')
                states[20]++;
            else if (value.state == 'MI')
                states[21]++;
            else if (value.state == 'MN')
                states[22]++;
            else if (value.state == 'MS')
                states[23]++;
            else if (value.state == 'MO')
                states[24]++;
            else if (value.state == 'MT')
                states[25]++;
            else if (value.state == 'NE')
                states[26]++;
            else if (value.state == 'NV')
                states[27]++;
            else if (value.state == 'NH')
                states[28]++;
            else if (value.state == 'NJ')
                states[29]++;
            else if (value.state == 'NM')
                states[30]++;
            else if (value.state == 'NY')
                states[31]++;
            else if (value.state == 'NC')
                states[32]++;
            else if (value.state == 'ND')
                states[33]++;
            else if (value.state == 'OH')
                states[34]++;
            else if (value.state == 'OK')
                states[35]++;
            else if (value.state == 'OR')
                states[36]++;
            else if (value.state == 'PA')
                states[37]++;
            else if (value.state == 'RI')
                states[38]++;
            else if (value.state == 'SC')
                states[39]++;
            else if (value.state == 'SD')
                states[40]++;
            else if (value.state == 'TN')
                states[41]++;
            else if (value.state == 'TX')
                states[42]++;
            else if (value.state == 'UT')
                states[43]++;
            else if (value.state == 'VT')
                states[44]++;
            else if (value.state == 'VA')
                states[45]++;
            else if (value.state == 'WA')
                states[46]++;
            else if (value.state == 'WV')
                states[47]++;
            else if (value.state == 'WI')
                states[48]++;
            else if (value.state == 'WY')
                states[49]++;
        });
        // Create hc-key array using states data
        // Construct map
    });
});