export interface TemplateType {
    id: number;
    title: string;
    tasks: string[];
}

export const allTemplates: TemplateType[] = [
    {
        id: 1,
        title: "Basement Remodel / Finish",
        tasks: [
            "Collect final payment",
            "Complete punch list items",
            "Conduct initial walkthrough and consultation",
            "Confirm ceiling height, egress, and code compliance",
            "Finalize layout and selections",
            "Frame walls and soffits",
            "Hang and finish drywall",
            "Install any cabinetry or built-ins",
            "Install doors and trim",
            "Install flooring",
            "Install lighting and electrical trim",
            "Install plumbing fixtures",
            "Insulate exterior walls",
            "Perform internal punch list",
            "Prime and paint",
            "Pull permits",
            "Rough-in plumbing, electrical, HVAC",
            "Schedule and pass rough inspections",
            "Send formal proposal",
            "Sign contract and collect deposit",
            "Walk job with client"
        ]
    },
    {
        id: 2,
        title: "Bathroom Remodel",
        tasks: [
            "Capture measurements and photos",
            "Collect final payment",
            "Complete punch list items",
            "Conduct site visit and consultation",
            "Demo existing bathroom",
            "Finalize design and material selections",
            "Grout and seal tile",
            "Hang and finish drywall",
            "Install accessories (towel bars, etc.)",
            "Install lighting and electrical trim",
            "Install new tub or shower pan",
            "Install plumbing fixtures",
            "Install vanity and mirror",
            "Install waterproofing and backer board",
            "Order tile, vanity, fixtures, and finishes",
            "Perform internal punch list",
            "Prime and paint",
            "Relocate or modify plumbing and electrical",
            "Rough-in electrical",
            "Rough-in plumbing",
            "Schedule and pass rough inspections",
            "Schedule start date and notify client",
            "Send formal proposal",
            "Send preliminary budget or range",
            "Set up dust protection and floor coverings",
            "Sign contract and collect deposit",
            "Tile shower walls and floor",
            "Walk job with client"
        ]
    },
    {
        id: 3,
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
        id: 4,
        title: "Cabinet Install",
        tasks: [
            "Adjust doors and drawers",
            "Clean work area",
            "Confirm cabinet delivery and layout",
            "Confirm hardware install (client or builder)",
            "Confirm payment",
            "Install panels, fillers, and toe kicks",
            "Lay out base and upper cabinet positions",
            "Mark job complete",
            "Mount upper cabinets",
            "Shim and level base cabinets",
            "Submit invoice",
            "Take completion photos",
            "Unload and inspect boxes",
            "Verify site is ready (floors in, walls painted)"
        ]
    },
    {
        id: 5,
        title: "Camera System Install",
        tasks: [
            "Confirm approval and camera layout",
            "Confirm payment",
            "Connect cameras and program system",
            "Mark job complete",
            "Mount cameras and run cable",
            "Order cameras, NVR, and cabling",
            "Send estimate to client",
            "Set NVR and power supply",
            "Set up remote viewing",
            "Submit invoice",
            "Walk through with client"
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
    },
    {
        id: 7,
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
        id: 8,
        title: "Drain Cleaning",
        tasks: [
            "Clear drain and run water test",
            "Confirm access point and blockage type",
            "Confirm payment",
            "Inspect for recurring issues",
            "Mark job complete",
            "Recommend next steps if needed",
            "Set up equipment (snake, jetter, etc.)",
            "Submit invoice"
        ]
    },
    {
        id: 9,
        title: "Landscaping Install",
        tasks: [
            "Clean up job site",
            "Confirm design plan and materials list",
            "Confirm payment",
            "Deliver plants, mulch, sod, and stone",
            "Grade site for drainage",
            "Install irrigation (if included)",
            "Install trees, shrubs, and flowers",
            "Lay sod or seed lawn",
            "Mark job complete",
            "Mark out planting beds and lawn areas",
            "Spread mulch or gravel",
            "Submit invoice",
            "Walk job with client"
        ]
    },
    {
        id: 10,
        title: "Maintenance Schedule",
        tasks: [
            "Assign technician",
            "Attach checklist or instructions",
            "Log maintenance task",
            "Mark task as complete",
            "Schedule next service (if recurring)",
            "Upload completion photos"
        ]
    }
];

// Split into two columns for Marquee lists
export const col1Templates = [allTemplates[0], allTemplates[2], allTemplates[4], allTemplates[6], allTemplates[8]];
export const col2Templates = [allTemplates[1], allTemplates[3], allTemplates[5], allTemplates[7], allTemplates[9]];
