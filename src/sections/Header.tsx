import { useEffect, useRef, useState } from "react";
import { Icon } from "../components/Icon";
import { event } from "../content/event";
import { navigation, sectionIds } from "../content/sections";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Header.css";

const navIds = navigation.map((item) => item.id);

export function Header() {
	const active = useActiveSection(navIds);
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!menuOpen) return;
		menuRef.current?.querySelector("a")?.focus();
		const onKey = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			setMenuOpen(false);
			toggleRef.current?.focus();
		};
		const onPointer = (e: PointerEvent) => {
			const target = e.target as Node;
			if (
				!menuRef.current?.contains(target) &&
				!toggleRef.current?.contains(target)
			) {
				setMenuOpen(false);
			}
		};
		const desktop = window.matchMedia("(min-width: 900px)");
		const onResize = () => desktop.matches && setMenuOpen(false);
		document.addEventListener("keydown", onKey);
		document.addEventListener("pointerdown", onPointer);
		desktop.addEventListener("change", onResize);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("pointerdown", onPointer);
			desktop.removeEventListener("change", onResize);
		};
	}, [menuOpen]);

	const links = navigation.map((item) => (
		<li key={item.id}>
			<a
				href={`#${item.id}`}
				className="site-nav__link"
				aria-current={active === item.id ? "true" : undefined}
				onClick={() => setMenuOpen(false)}
			>
				{item.label}
			</a>
		</li>
	));

	return (
		<header className="site-header">
			<div className="container site-header__bar">
				<a href={`#${sectionIds.home}`} className="brand">
					<Icon name="crown" size={28} className="brand__mark" />
					<span className="brand__text">
						<span className="brand__name">{event.name}</span>
						<span className="brand__since">Since {event.foundedYear}</span>
					</span>
				</a>

				<nav aria-label="Primary" className="site-nav site-nav--desktop">
					<ul>{links}</ul>
				</nav>

				<button
					ref={toggleRef}
					type="button"
					className="menu-toggle"
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<Icon name={menuOpen ? "close" : "menu"} size={24} />
					<span className="visually-hidden">
						{menuOpen ? "Close menu" : "Open menu"}
					</span>
				</button>
			</div>

			<nav
				ref={menuRef}
				id="mobile-nav"
				aria-label="Primary"
				className="site-nav site-nav--mobile"
				data-open={menuOpen}
				hidden={!menuOpen}
			>
				<ul className="container">{links}</ul>
			</nav>
		</header>
	);
}
