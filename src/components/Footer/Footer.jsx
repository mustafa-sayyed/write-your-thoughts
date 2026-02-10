function Footer() {
  return (
    <div className="h-16 bg-[var(--base-200)] flex items-center justify-center">
      <p>
        Copyright &copy; {new Date().getFullYear()} <span className="italic font-semibold tracking-tighter">Write Your Thoughts.</span> All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
