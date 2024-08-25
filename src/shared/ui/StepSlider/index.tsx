'use client';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Slider, SliderChangeEvent, SliderProps } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';

interface IStepSliderProps<T extends string = string> extends Omit<SliderProps, 'onChange'> {
	steps?: T[];
	upperLabel?: boolean;
	firstLetter?: boolean;
	onChange?: (value: T) => void;
}

export function StepSlider<T extends string = string>({
	steps = [],
	upperLabel = true,
	firstLetter = true,
	onChange = () => null,
	...props
}: IStepSliderProps<T>) {
	const [stepValue, setStepValue] = useState<T | null>(steps[0]);
	const [sliderValue, setSliderValue] = useState<number>(0);
	const [renderValue, setRenderValue] = useState<string>('');
	const handleInput = useRef<HTMLInputElement>(null);
	const step = 100 / (steps.length - 1);

	const defineValue = (value: number): { correctValue: number; stepValue: T } => {
		const index = Math.round(value / step);
		return { correctValue: step * index, stepValue: steps[index] };
	};

	const handleOnChange = ({ value }: SliderChangeEvent) => {
		const { stepValue } = defineValue(value as number);
		setStepValue(stepValue);
		setSliderValue(value as number);
	};

	const handleSlideEnd = (value: number) => {
		const { correctValue, stepValue } = defineValue(value);
		setSliderValue(correctValue);
		setStepValue(stepValue);
		onChange(stepValue);
	};

	const setNextStep = () => {
		if (stepValue === steps.at(-1)) return;
		handleSlideEnd(sliderValue + step);
	};

	const setPrevStep = () => {
		if (stepValue === steps.at(0)) return;
		handleSlideEnd(sliderValue - step);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (['ArrowRight', 'ArrowUp'].includes(e.key)) {
			setNextStep();
		}
		if (['ArrowLeft', 'ArrowDown'].includes(e.key)) {
			setPrevStep();
		}
	};

	const getLabelContent = (name: string) => {
		let label = name;
		if (firstLetter) {
			label = label[0];
		}
		if (upperLabel) {
			label = label.toUpperCase();
		}
		return label;
	};

	useEffect(() => {
		setRenderValue((prev) => (prev === '' ? ' ' : ''));
	}, [sliderValue]);

	const getNameMark = (name: string | null | undefined) =>
		name ? <div className='text-sm'>{getLabelContent(name)}</div> : null;

	return (
		<>
			<div className='step-slider w-full flex align-items-center gap-3'>
				{getNameMark(steps.at(0))}
				<Slider
					onChange={handleOnChange}
					className='w-full z-10'
					value={sliderValue}
					onSlideEnd={({ value }) => handleSlideEnd(value as number)}
					pt={{
						handle: {
							className: 'cursor-pointer',
							onMouseDown: () => handleInput.current?.focus(),
							onFocus: () => handleInput.current?.focus(),
							children: (
								<input
									className='step-slider-input cursor-pointer w-full h-full'
									ref={handleInput}
									style={{ opacity: 0, zIndex: -1 }}
								/>
							),
						},
					}}
					onKeyDown={handleKeyDown}
					{...props}
				/>
				{getNameMark(steps.at(-1))}
			</div>
			<Tooltip
				target='.step-slider-input'
				content={getLabelContent(stepValue || '') + renderValue}
				position='top'
				style={{ transform: 'translateY(-10px)' }}
				event='focus'
				hideDelay={250}
			/>
		</>
	);
}
