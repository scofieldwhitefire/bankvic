const NavItem = ({
  text,
  hasDropdown = false,
}: {
  text: string;
  hasDropdown?: boolean;
}) => {
  return (
    <div className="nav__primary-item text-[#474747]">
      <div className="nav__primary-link primary">
        <span>{text}</span>
        {hasDropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default NavItem;
