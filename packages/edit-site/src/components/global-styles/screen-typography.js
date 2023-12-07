/**
 * WordPress dependencies
 */
import { __, isRTL } from '@wordpress/i18n';
import { chevronLeft, chevronRight } from '@wordpress/icons';
import {
	FlexItem,
	__experimentalItemGroup as ItemGroup,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { IconWithCurrentColor } from './icon-with-current-color';
import TypographyElements from './typogrphy-elements';
import FontFamilies from './font-families';
import ScreenHeader from './header';
import { NavigationButtonAsItem } from './navigation-button';

function ScreenTypography() {
	return (
		<>
			<ScreenHeader
				title={ __( 'Typography' ) }
				description={ __(
					'Manage the typography settings for different elements.'
				) }
			/>
			<div className="edit-site-global-styles-screen-typography">
				<VStack spacing={ 6 }>
					{ ! window.__experimentalDisableFontLibrary && (
						<VStack spacing={ 3 }>
							<FontFamilies />
							<ItemGroup isBordered>
								<NavigationButtonAsItem
									path="/typography/typesets"
									aria-label={ __( 'Typesets' ) }
								>
									<HStack justify="space-between">
										<FlexItem>
											{ __( 'Typesets' ) }
										</FlexItem>
										<IconWithCurrentColor
											icon={
												isRTL()
													? chevronLeft
													: chevronRight
											}
										/>
									</HStack>
								</NavigationButtonAsItem>
							</ItemGroup>
						</VStack>
					) }
					<TypographyElements />
				</VStack>
			</div>
		</>
	);
}

export default ScreenTypography;
