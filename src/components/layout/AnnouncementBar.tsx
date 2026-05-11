"use client";

// Announcement bar is currently disabled
// To re-enable, set active to true and update the message/link
const announcement = {
  active: false,
  message: "",
  link: "/",
};

export function AnnouncementBar() {
  if (!announcement.active) return null;

  return (
    <div className="bg-charcoal-medium border-b border-white/10">
      <div className="container-site py-2">
        <a
          href={announcement.link}
          className="flex items-center justify-center text-xs sm:text-sm text-white/70 hover:text-white transition-colors text-center"
        >
          {announcement.message}
        </a>
      </div>
    </div>
  );
}
