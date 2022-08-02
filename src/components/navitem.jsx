/**
 * A navigation component
 */
import React, { Component, PropsWithChildren } from "react";
import { Link, withRouter } from "react-router-dom";

function NavItem({ index, to, children, ...props }) {
  const { router } = props;

  let isActive;
  if (router.isActive("/", true) && index) isActive = true;
  else isActive = router.isActive(to);
  const LinkComponent = index ? IndexLink : Link;

  return (
    <li className={isActive ? " active" : ""}>
      <LinkComponent to={to} {...props}>
        {children}
      </LinkComponent>
    </li>
  );
}

NavItem = withRouter(NavItem);

export default NavItem;
