import SidebarMenu from "react-bootstrap-sidebar-menu";
import React from "react";

const OurService = () => {
	return (
		<SidebarMenu>
			<SidebarMenu.Collapse>
				<SidebarMenu.Header>
					<SidebarMenu.Brand>{/* brand icon */}</SidebarMenu.Brand>
					<SidebarMenu.Toggle />
				</SidebarMenu.Header>
				<SidebarMenu.Body>
					<SidebarMenu.Nav>
						<SidebarMenu.Nav.Link>
							<SidebarMenu.Nav.Icon>{/* menu item icon */}</SidebarMenu.Nav.Icon>
							<SidebarMenu.Nav.Title>{/* menu item title */}</SidebarMenu.Nav.Title>
						</SidebarMenu.Nav.Link>
						<SidebarMenu.Sub>
							<SidebarMenu.Sub.Toggle>
								<SidebarMenu.Nav.Icon />
								<SidebarMenu.Nav.Title>{/* sub menu item title */}</SidebarMenu.Nav.Title>
							</SidebarMenu.Sub.Toggle>
							<SidebarMenu.Sub.Collapse>
								<SidebarMenu.Nav>
									<SidebarMenu.Nav.Link>
										<SidebarMenu.Nav.Icon>{/* sum menu item icon */}</SidebarMenu.Nav.Icon>
										<SidebarMenu.Nav.Title>{/* sub menu item title */}</SidebarMenu.Nav.Title>
									</SidebarMenu.Nav.Link>
								</SidebarMenu.Nav>
							</SidebarMenu.Sub.Collapse>
						</SidebarMenu.Sub>
					</SidebarMenu.Nav>
				</SidebarMenu.Body>
			</SidebarMenu.Collapse>
		</SidebarMenu>
	);
};

export default OurService;
