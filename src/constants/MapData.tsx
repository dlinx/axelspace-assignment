import { ReactElement } from 'react';
import { MdChildFriendly, MdFlight, MdFlightLand, MdFlightTakeoff, MdSchool, MdWork } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'
export type MapEvent = {
    type: string,
    geometry: {
        type: string,
        coordinates: [lng: number, lat: number]
    },
    properties: {
        year: number
        eventType: string
        title: string
        duration: number
        description: string
        icon: ReactElement
    }

}

export const MAP_DATA: MapEvent[] = [
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.187401, 18.872999]
        },
        properties: {
            year: 1990,
            eventType: 'birth',
            title: 'Born',
            description: 'I born in a small villege in India called Kandhar. This is an well known historical place famous for Rashtrakuta fort.',
            duration: 20,
            icon: <MdChildFriendly />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.187401, 18.872999]
        },
        properties: {
            year: 1995,
            eventType: 'school',
            title: 'Primary School',
            description: 'I have complited my primary school here.',
            duration: 20,
            icon: <MdSchool />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.574140, 18.55136]
        },
        properties: {
            year: 2001,
            eventType: 'school',
            title: 'Secondary School',
            description: `I moved to Degloor due to my parent's job transfer. I have completed my secondary school here.`,
            duration: 20,
            icon: <MdSchool />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.574140, 18.55136]
        },
        properties: {
            year: 2005,
            eventType: 'school',
            title: 'Junior College',
            description: `I have finished my Junior college in this city.`,
            duration: 20,
            icon: <MdSchool />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.3024680910429, 19.158918466909014]
        },
        properties: {
            year: 2007,
            eventType: 'school',
            title: 'B. Sc. CS',
            description: `I have moved to district place to complete my bacholer's degree.`,
            duration: 20,
            icon: <FaUniversity />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [74.18849933413564, 17.284632571860975]
        },
        properties: {
            year: 2010,
            eventType: 'school',
            title: 'MCA',
            description: `I scored well in MCA enterance and moved to Karad to acomplish my Master's degree.`,
            duration: 20,
            icon: <FaUniversity />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [73.83024994419657, 18.541621226313435]
        },
        properties: {
            year: 2013,
            eventType: 'work',
            title: 'Joined NIC',
            description: 'I have joined NIC as internship trainee. NIC is government organization for Software development.',
            duration: 20,
            icon: <MdWork />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [73.68456481749548, 18.59233967713827]
        },
        properties: {
            year: 2014,
            eventType: 'work',
            title: 'Engineer Synechron',
            description: 'I Joined Synechron Pvt. Ltd. as Junior associate. This company is in Pune, Pune is also well known city for history and Software development.',
            duration: 20,
            icon: <MdWork />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [54.641259834905014, 24.453699012686]
        },
        properties: {
            year: 2015,
            eventType: 'work',
            title: 'Business Trip to Abu Dhabi',
            description: 'Within a year of joining Synechron, I got opportunity to move to Abu Dhabi, UAE for business trip.',
            duration: 20,
            icon: <MdFlightTakeoff />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.68317321342342, 12.930179235112792]
        },
        properties: {
            year: 2016,
            eventType: 'work',
            title: 'Back to India',
            description: 'After finishing the work in Abu Dhabi, after almost 1.5 years, I moved back to India.',
            duration: 20,
            icon: <MdFlightLand />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [130.41900795976025, 33.58842807490951]
        },
        properties: {
            year: 2019,
            eventType: 'work',
            title: 'Moved to Japan',
            description: 'I have been always interested to visit Japan and learn more things about Japan. I got opportunity to move to Japan and Join LINE Fukuoka.',
            duration: 20,
            icon: <MdFlightTakeoff />
        }
    },
];