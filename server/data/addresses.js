const addresses = [
    {
        street_address_1: '36 Fifth St.',
        street_address_2: '',
        city: 'Lake Worth',
        state: 'FL',
        zip: '33460'
    },
    {
        street_address_1: '9269 Willow Street',
        street_address_2: '',
        city: 'Vineland',
        state: 'NJ',
        zip: '8360'
    },
    {
        street_address_1: '7809 Canal Road',
        street_address_2: '',
        city: 'Pelham',
        state: 'AL',
        zip: '35124'
    },
    {
        street_address_1: '555 South Sherwood Ave.',
        street_address_2: '',
        city: 'Hopkins',
        state: 'MN',
        zip: '55343'
    },
    {
        street_address_1: '391 Fifth Ave.',
        street_address_2: '',
        city: 'Dover',
        state: 'NH',
        zip: '3820'
    },
    {
        street_address_1: '369 Redwood St.',
        street_address_2: '',
        city: 'Carrollton',
        state: 'GA',
        zip: '30117'
    },
    {
        street_address_1: '1 Lakewood Ave.',
        street_address_2: '',
        city: 'Portage',
        state: 'IN',
        zip: '46368'
    },
    {
        street_address_1: '7379 Arlington Court',
        street_address_2: '',
        city: 'Durham',
        state: 'NC',
        zip: '27703'
    },
    {
        street_address_1: '7929 Briarwood Street',
        street_address_2: '',
        city: 'Buffalo Grove',
        state: 'IL',
        zip: '60089'
    },
    {
        street_address_1: '744 Cherry Dr.',
        street_address_2: '',
        city: 'Bardstown',
        state: 'KY',
        zip: '40004'
    },
    {
        street_address_1: '13 East Marvon St.',
        street_address_2: '',
        city: 'Green Bay',
        state: 'WI',
        zip: '54302'
    },
    {
        street_address_1: '7 East Kirkland Lane',
        street_address_2: '',
        city: 'Englishtown',
        state: 'NJ',
        zip: '7726'
    },
    {
        street_address_1: '8304 Amerige St.',
        street_address_2: '',
        city: 'Mount Holly',
        state: 'NJ',
        zip: '8060'
    },
    {
        street_address_1: '96 Colonial Ave.',
        street_address_2: '',
        city: 'Norwich',
        state: 'CT',
        zip: '6360'
    },
    {
        street_address_1: '30 E. Glen Creek Dr.',
        street_address_2: '',
        city: 'Fishers',
        state: 'IN',
        zip: '46037'
    },
    {
        street_address_1: '997 Old Mountainview St.',
        street_address_2: '',
        city: 'Fredericksburg',
        state: 'VA',
        zip: '22405'
    },
    {
        street_address_1: '68 Briarwood Street',
        street_address_2: '',
        city: 'Spartanburg',
        state: 'SC',
        zip: '29301'
    },
    {
        street_address_1: '8803 Riverside St.',
        street_address_2: '',
        city: 'Mount Prospect',
        state: 'IL',
        zip: '60056'
    },
    {
        street_address_1: '63 Hillside Lane',
        street_address_2: '',
        city: 'Wyoming',
        state: 'MI',
        zip: '49509'
    },
    {
        street_address_1: '39 6th Dr.',
        street_address_2: '',
        city: 'New Brunswick',
        state: 'NJ',
        zip: '8901'
    },
    {
        street_address_1: '7604 East Border Ave.',
        street_address_2: '',
        city: 'Westport',
        state: 'CT',
        zip: '6880'
    },
    {
        street_address_1: '1 Mayfield Dr.',
        street_address_2: '',
        city: 'Marysville',
        state: 'OH',
        zip: '43040'
    },
    {
        street_address_1: '993 La Sierra Street',
        street_address_2: '',
        city: 'Pomona',
        state: 'CA',
        zip: '91768'
    },
    {
        street_address_1: '801 Lyme Road',
        street_address_2: '',
        city: 'Fernandina Beach',
        state: 'FL',
        zip: '32034'
    },
    {
        street_address_1: '3 Valley St.',
        street_address_2: '',
        city: 'Zanesville',
        state: 'OH',
        zip: '43701'
    },
    {
        street_address_1: '97 Wilson Lane',
        street_address_2: '',
        city: 'Haines City',
        state: 'FL',
        zip: '33844'
    },
    {
        street_address_1: '8 S. 6th Drive',
        street_address_2: '',
        city: 'Marietta',
        state: 'GA',
        zip: '30008'
    },
    {
        street_address_1: '78 Somerset Rd.',
        street_address_2: '',
        city: 'Newton',
        state: 'NJ',
        zip: '7860'
    },
    {
        street_address_1: '538 Bowman St.',
        street_address_2: '',
        city: 'Fort Lauderdale',
        state: 'FL',
        zip: '33308'
    },
    {
        street_address_1: '8963 County Drive',
        street_address_2: '',
        city: 'Dorchester Center',
        state: 'MA',
        zip: '2124'
    },
    {
        street_address_1: '64 Virginia Street',
        street_address_2: '',
        city: 'Muscatine',
        state: 'IA',
        zip: '52761'
    },
    {
        street_address_1: '7397 Trenton Ave.',
        street_address_2: '',
        city: 'Fairfax',
        state: 'VA',
        zip: '22030'
    },
    {
        street_address_1: '405 Stillwater St.',
        street_address_2: '',
        city: 'Kennewick',
        state: 'WA',
        zip: '99337'
    },
    {
        street_address_1: '7456 Taylor Street',
        street_address_2: '',
        city: 'Champaign',
        state: 'IL',
        zip: '61821'
    },
    {
        street_address_1: '156 Pulaski Dr.',
        street_address_2: '',
        city: 'Marlton',
        state: 'NJ',
        zip: '8053'
    },
    {
        street_address_1: '8 Oakwood St.',
        street_address_2: '',
        city: 'Framingham',
        state: 'MA',
        zip: '1701'
    },
    {
        street_address_1: '753 Manhattan Rd.',
        street_address_2: '',
        city: 'Teaneck',
        state: 'NJ',
        zip: '7666'
    },
    {
        street_address_1: '174 La Sierra Rd.',
        street_address_2: '',
        city: 'Paterson',
        state: 'NJ',
        zip: '7501'
    },
    {
        street_address_1: '9899 Hanover St.',
        street_address_2: '',
        city: 'New Hyde Park',
        state: 'NY',
        zip: '11040'
    },
    {
        street_address_1: '259 School Dr.',
        street_address_2: '',
        city: 'Abingdon',
        state: 'MD',
        zip: '21009'
    },
    {
        street_address_1: '8867 Railroad Dr.',
        street_address_2: '',
        city: 'Merrick',
        state: 'NY',
        zip: '11566'
    },
    {
        street_address_1: '2 West Arnold Rd.',
        street_address_2: '',
        city: 'Lafayette',
        state: 'IN',
        zip: '47905'
    },
    {
        street_address_1: '9 Summer Dr.',
        street_address_2: '',
        city: 'Mount Juliet',
        state: 'TN',
        zip: '37122'
    },
    {
        street_address_1: '264 Durham Street',
        street_address_2: '',
        city: 'Parlin',
        state: 'NJ',
        zip: '8859'
    },
    {
        street_address_1: '4 Hill Street',
        street_address_2: '',
        city: 'Mahwah',
        state: 'NJ',
        zip: '7430'
    },
    {
        street_address_1: '41 Mayfair Lane',
        street_address_2: '',
        city: 'Colorado Springs',
        state: 'CO',
        zip: '80911'
    },
    {
        street_address_1: '593 Harvey Ave.',
        street_address_2: '',
        city: 'Bluffton',
        state: 'SC',
        zip: '29910'
    },
    {
        street_address_1: '70 Paris Hill Lane',
        street_address_2: '',
        city: 'Graham',
        state: 'NC',
        zip: '27253'
    },
    {
        street_address_1: '49 Lower River Avenue',
        street_address_2: '',
        city: 'Monroe',
        state: 'NY',
        zip: '10950'
    },
    {
        street_address_1: '68 Circle St.',
        street_address_2: '',
        city: 'West New York',
        state: 'NJ',
        zip: '7093'
    },
]

module.exports = addresses