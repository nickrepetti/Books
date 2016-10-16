package spittr.web;

import static org.springframework.web.bind.annotation.RequestMethod.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import spittr.data.SpittleRepository;
import spittr.Spittle;

@Controller
@RequestMapping("/spittles")
public class SpittleController {
	
	private static final String MAX_LONG_AS_STRING = "9223372036854775807";
	private SpittleRepository spittleRepository;
	
	@Autowired
	public SpittleController(SpittleRepository spittleRepository) {
		this.spittleRepository = spittleRepository;
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public String spittles(
		@RequestParam(value="max", defaultValue=MAX_LONG_AS_STRING) long max, 
		@RequestParam(value="count", defaultValue="20") int count, Model model) {
		
		List<Spittle> spittleList = spittleRepository.findSpittles(max, count);
		
		model.addAttribute("spittleList", spittleList);
		
		return "spittles";
	}
	
	@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
	public String spittle(
		@PathVariable("spittleId") long spittleId, Model model) {
		
		Spittle spittle = spittleRepository.findOne(spittleId);
		
		if (spittle != null) {
			model.addAttribute("spittle", spittle);
		}
		
		return "spittle";
	}
}
