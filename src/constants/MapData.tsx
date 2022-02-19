import { ReactElement } from 'react';
import { MdChildFriendly, MdFlight, MdSchool, MdWork } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'
export type MapEvent = {
    type: string,
    geometry: {
        type: string,
        coordinates: [lat: number, lng: number]
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
            coordinates: [0, 0]
        },
        properties: {
            year: 1990,
            eventType: 'birth',
            title: 'Born',
            description: '',
            duration: 20,
            icon: <MdChildFriendly />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 1995,
            eventType: 'school',
            title: 'Primary School',
            description: '',
            duration: 20,
            icon: <MdSchool />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2001,
            eventType: 'school',
            title: 'Secondary School',
            description: '',
            duration: 20,
            icon: <MdSchool />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2006,
            eventType: 'school',
            title: 'Junior College',
            description: '',
            duration: 20,
            icon: <MdSchool />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2005,
            eventType: 'school',
            title: 'B. Sc. CS',
            description: '',
            duration: 20,
            icon: <FaUniversity />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2010,
            eventType: 'school',
            title: 'MCA',
            description: '',
            duration: 20,
            icon: <FaUniversity />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2013,
            eventType: 'work',
            title: 'Internship at NIC',
            description: '',
            duration: 20,
            icon: <MdWork />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2013,
            eventType: 'work',
            title: 'Engineer at NIC',
            description: '',
            duration: 20,
            icon: <MdWork />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2014,
            eventType: 'work',
            title: 'Engineer Synechron',
            description: '',
            duration: 20,
            icon: <MdWork />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2015,
            eventType: 'work',
            title: 'Business Trip to Abu Dhabi',
            description: '',
            duration: 20,
            icon: <MdFlight />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2016,
            eventType: 'work',
            title: 'Back to India',
            description: '',
            duration: 20,
            icon: <MdFlight />
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            year: 2019,
            eventType: 'work',
            title: 'Moved to Japan',
            description: '',
            duration: 20,
            icon: <MdFlight />
        }
    },
];