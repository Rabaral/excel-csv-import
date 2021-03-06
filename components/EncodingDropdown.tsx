import * as React from 'react';
import {Dropdown, IDropdownOption} from '@fluentui/react';
import {EncodingDropdownOptions} from './EncodingDropdownOptions';

interface Props {
	showAutoDetect: boolean;
	value: string;
	onChange: (value: string) => void;
}

const AutoDetectOption: IDropdownOption = {
	'key': '',
	'text': 'Auto-detect',
};

export function EncodingDropdown({showAutoDetect, value, onChange}: Props): React.ReactElement {
	let dropdownOptions: IDropdownOption[];
	if (showAutoDetect) {
		dropdownOptions = [AutoDetectOption, ...EncodingDropdownOptions];
	} else {
		dropdownOptions = EncodingDropdownOptions;
	}

	return (
		<>
			<Dropdown
				label={'Encoding'}
				selectedKey={value}
				options={dropdownOptions}
				onChange={(_, option) => onChange(option.key as string)}
			/>
			<br/>
		</>
	);
}