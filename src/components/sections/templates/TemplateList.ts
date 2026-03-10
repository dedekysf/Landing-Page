export interface TemplateType {
    id: number;
    title: string;
    tasks: string[];
}

export const allTemplates: TemplateType[] = [
    {
        id: 1,
        title: "Before & After Photo Log",
        tasks: [
            "Complete scope of work",
            "Mark task as complete",
            "Take after photo",
            "Take before photo of work area",
            "Upload before and after photos"
        ]
    },
    {
        id: 2,
        title: "Delivery Photo Proof",
        tasks: [
            "Assign follow-up if needed",
            "Inspect items for accuracy and damage",
            "Log delivery details",
            "Mark delivery as verified",
            "Tag missing or damaged items",
            "Upload delivery photos"
        ]
    },
    {
        id: 3,
        title: "Punch List Tracker",
        tasks: [
            "Add due dates for punch items",
            "Assign punch items to trades",
            "Confirm fixes are complete",
            "Mark punch list as resolved",
            "Upload after photos",
            "Upload issue photos",
            "Walk space and identify punch items"
        ]
    },
    {
        id: 4,
        title: "Timesheet Tracker",
        tasks: [
            "Approve or flag entry",
            "Enter hours worked",
            "Log crew and trade",
            "Note overtime or special conditions",
            "Submit for approval",
            "Upload photo of timesheet (if applicable)"
        ]
    },
    {
        id: 5,
        title: "Submittal Tracker",
        tasks: [
            "Archive approved submittal",
            "Assign reviewer",
            "Log submittal item and spec section",
            "Notify field team of approval",
            "Track approval status",
            "Upload submittal file"
        ]
    },
    {
        id: 6,
        title: "Daily Field Report",
        tasks: [
            "Log weather and site conditions",
            "Note delays or safety incidents",
            "Record crew counts by trade",
            "Submit daily report",
            "Track deliveries received",
            "Upload progress photos"
        ]
    }
];

// Split into two columns for Marquee lists
export const col1Templates = [allTemplates[0], allTemplates[2], allTemplates[4]];
export const col2Templates = [allTemplates[1], allTemplates[3], allTemplates[5]];
