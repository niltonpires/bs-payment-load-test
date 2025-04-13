var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "0",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "526",
        "ok": "-",
        "ko": "526"
    },
    "maxResponseTime": {
        "total": "3544",
        "ok": "-",
        "ko": "3544"
    },
    "meanResponseTime": {
        "total": "759",
        "ok": "-",
        "ko": "759"
    },
    "standardDeviation": {
        "total": "660",
        "ok": "-",
        "ko": "660"
    },
    "percentiles1": {
        "total": "536",
        "ok": "-",
        "ko": "536"
    },
    "percentiles2": {
        "total": "555",
        "ok": "-",
        "ko": "555"
    },
    "percentiles3": {
        "total": "2151",
        "ok": "-",
        "ko": "2151"
    },
    "percentiles4": {
        "total": "3271",
        "ok": "-",
        "ko": "3271"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_register---succ-ea150": {
        type: "REQUEST",
        name: "Register - Successo All",
path: "Register - Successo All",
pathFormatted: "req_register---succ-ea150",
stats: {
    "name": "Register - Successo All",
    "numberOfRequests": {
        "total": "30",
        "ok": "0",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "526",
        "ok": "-",
        "ko": "526"
    },
    "maxResponseTime": {
        "total": "3544",
        "ok": "-",
        "ko": "3544"
    },
    "meanResponseTime": {
        "total": "759",
        "ok": "-",
        "ko": "759"
    },
    "standardDeviation": {
        "total": "660",
        "ok": "-",
        "ko": "660"
    },
    "percentiles1": {
        "total": "536",
        "ok": "-",
        "ko": "536"
    },
    "percentiles2": {
        "total": "555",
        "ok": "-",
        "ko": "555"
    },
    "percentiles3": {
        "total": "2151",
        "ok": "-",
        "ko": "2151"
    },
    "percentiles4": {
        "total": "3271",
        "ok": "-",
        "ko": "3271"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
