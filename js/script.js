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
            if (value.state === 'AL')
                states[0]++;
            else if (value.state === 'AK')
                states[1]++;
            else if (value.state === 'AZ')
                states[2]++;
            else if (value.state === 'AR')
                states[3]++;
            else if (value.state === 'CA')
                states[4]++;
            else if (value.state === 'CO')
                states[5]++;
            else if (value.state === 'CT')
                states[6]++;
            else if (value.state === 'DE')
                states[7]++;
            else if (value.state === 'FL')
                states[8]++;
            else if (value.state === 'GA')
                states[9]++;
            else if (value.state === 'HI')
                states[10]++;
            else if (value.state === 'ID')
                states[11]++;
            else if (value.state === 'IL')
                states[12]++;
            else if (value.state === 'IN')
                states[13]++;
            else if (value.state === 'IA')
                states[14]++;
            else if (value.state === 'KS')
                states[15]++;
            else if (value.state === 'KY')
                states[16]++;
            else if (value.state === 'LA')
                states[17]++;
            else if (value.state === 'ME')
                states[18]++;
            else if (value.state === 'MD')
                states[19]++;
            else if (value.state === 'MA')
                states[20]++;
            else if (value.state === 'MI')
                states[21]++;
            else if (value.state === 'MN')
                states[22]++;
            else if (value.state === 'MS')
                states[23]++;
            else if (value.state === 'MO')
                states[24]++;
            else if (value.state === 'MT')
                states[25]++;
            else if (value.state === 'NE')
                states[26]++;
            else if (value.state === 'NV')
                states[27]++;
            else if (value.state === 'NH')
                states[28]++;
            else if (value.state === 'NJ')
                states[29]++;
            else if (value.state === 'NM')
                states[30]++;
            else if (value.state === 'NY')
                states[31]++;
            else if (value.state === 'NC')
                states[32]++;
            else if (value.state === 'ND')
                states[33]++;
            else if (value.state === 'OH')
                states[34]++;
            else if (value.state === 'OK')
                states[35]++;
            else if (value.state === 'OR')
                states[36]++;
            else if (value.state === 'PA')
                states[37]++;
            else if (value.state === 'RI')
                states[38]++;
            else if (value.state === 'SC')
                states[39]++;
            else if (value.state === 'SD')
                states[40]++;
            else if (value.state === 'TN')
                states[41]++;
            else if (value.state === 'TX')
                states[42]++;
            else if (value.state === 'UT')
                states[43]++;
            else if (value.state === 'VT')
                states[44]++;
            else if (value.state === 'VA')
                states[45]++;
            else if (value.state === 'WA')
                states[46]++;
            else if (value.state === 'WV')
                states[47]++;
            else if (value.state === 'WI')
                states[48]++;
            else if (value.state === 'WY')
                states[49]++;
        });
        // Create hc-key array using states data
        var statesData = [
            {"hc-key": "us-al", "value": states[0]},
            {"hc-key": "us-ak", "value": states[1]},
            {"hc-key": "us-az", "value": states[2]},
            {"hc-key": "us-ar", "value": states[3]},
            {"hc-key": "us-ca", "value": states[4]},
            {"hc-key": "us-co", "value": states[5]},
            {"hc-key": "us-ct", "value": states[6]},
            {"hc-key": "us-de", "value": states[7]},
            {"hc-key": "us-fl", "value": states[8]},
            {"hc-key": "us-ga", "value": states[9]},
            {"hc-key": "us-hi", "value": states[10]},
            {"hc-key": "us-id", "value": states[11]},
            {"hc-key": "us-il", "value": states[12]},
            {"hc-key": "us-in", "value": states[13]},
            {"hc-key": "us-ia", "value": states[14]},
            {"hc-key": "us-ks", "value": states[15]},
            {"hc-key": "us-ky", "value": states[16]},
            {"hc-key": "us-la", "value": states[17]},
            {"hc-key": "us-me", "value": states[18]},
            {"hc-key": "us-md", "value": states[19]},
            {"hc-key": "us-ma", "value": states[20]},
            {"hc-key": "us-mi", "value": states[21]},
            {"hc-key": "us-mn", "value": states[22]},
            {"hc-key": "us-ms", "value": states[23]},
            {"hc-key": "us-mo", "value": states[24]},
            {"hc-key": "us-mt", "value": states[25]},
            {"hc-key": "us-ne", "value": states[26]},
            {"hc-key": "us-nv", "value": states[27]},
            {"hc-key": "us-nh", "value": states[28]},
            {"hc-key": "us-nj", "value": states[29]},
            {"hc-key": "us-nm", "value": states[30]},
            {"hc-key": "us-ny", "value": states[31]},
            {"hc-key": "us-nc", "value": states[32]},
            {"hc-key": "us-nd", "value": states[33]},
            {"hc-key": "us-oh", "value": states[34]},
            {"hc-key": "us-ok", "value": states[35]},
            {"hc-key": "us-or", "value": states[36]},
            {"hc-key": "us-pa", "value": states[37]},
            {"hc-key": "us-ri", "value": states[38]},
            {"hc-key": "us-sc", "value": states[39]},
            {"hc-key": "us-sd", "value": states[40]},
            {"hc-key": "us-tn", "value": states[41]},
            {"hc-key": "us-tx", "value": states[42]},
            {"hc-key": "us-ut", "value": states[43]},
            {"hc-key": "us-vt", "value": states[44]},
            {"hc-key": "us-va", "value": states[45]},
            {"hc-key": "us-wa", "value": states[46]},
            {"hc-key": "us-wv", "value": states[47]},
            {"hc-key": "us-wi", "value": states[48]},
            {"hc-key": "us-wy", "value": states[49]},
        ]
        // Construct map
        $('#container').highcharts('Map', {
            chart: {
                borderWidth: 1,
                type: 'map'
            },
            colorAxis: {
                min: 0
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: true
                }
            },
            series: [{
                animation: {
                    duration: 1000
                },
                data: statesData,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'Student loan complaints',
                states: {
                    hover: {
                        color: '#3cc864'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }],
            title: {
                text: title
            }
        });
    });
});